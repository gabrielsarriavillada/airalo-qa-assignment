import { test, expect } from '@playwright/test';
import { AiraloApi } from '../../api/airaloApi';
import { OrderRequest } from '../../models/order-request.model';

test("submit order and verify SIMs", async({ request }) => {
    const airalo = new AiraloApi(request);

    const token = await airalo.getToken();

    const order: OrderRequest = {
        quantity: 6,
        package_id: "moshi-moshi-7days-1gb",
        type: "sim",
        description: `airalo-qa-${Date.now()}`,
    };

    const orderBody = await airalo.submitOrder(token, order);

    expect(orderBody.meta.message).toBe("success");
    expect(orderBody.data.package_id).toBe(order.package_id);
    expect(orderBody.data.quantity).toBe(order.quantity);
    expect(orderBody.data.type).toBe(order.type);
    expect(orderBody.data.sims).toHaveLength(order.quantity);

    for (const sim of orderBody.data.sims) {
        await test.step(`verify eSIM ${sim.iccid}`, async () => {
            expect(sim.iccid).toBeTruthy();
            expect(sim.lpa).toBeTruthy();
            expect(sim.matching_id).toBeTruthy();

            const eSimBody = await airalo.getEsim(token, sim.iccid);

            expect(eSimBody.meta.message).toBe("success");
            expect(eSimBody.data.iccid).toBe(sim.iccid);
        });
    }
});
