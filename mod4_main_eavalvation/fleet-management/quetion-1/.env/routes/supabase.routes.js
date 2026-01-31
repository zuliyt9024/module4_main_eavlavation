
Router.post("/signup",signup);
Router.post("/create", rateLimiter,CreateVechicle);
Router.post("/create",createTrip);
Router.patch("/end/:tripId",endTrip);
Router.get("/",analytics);