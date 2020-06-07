import Token from "../utils/Token";

class Test {
    async view(req, res) {
        //const payload = { id: "40879", nome: "Rafael", email: "rafael.teste@gmail.com" };

        const token = Token.decode(
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQwODc5Iiwibm9tZSI6IlJhZmFlbCIsImVtYWlsIjoicmFmYWVsLnRlc3RlQGdtYWlsLmNvbSIsImlhdCI6MTU4OTI2MjEyNSwiZXhwIjoxNTg5MjYyNzI1fQ.L5grMri7bwppmKcfFwM2DLmsrfGLSEq9LRAtcTDrZOI"
        );

        return res.status(200).json({
            status: true,
            token,
        });
    }
}

export default new Test();
