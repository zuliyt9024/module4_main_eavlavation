



exports.createTrip = async (req, res) => {
  const { customer_id, vehicle_id, passengers, distance_km } = req.body;

  const { data: vehicle } = await supabase
    .from("vehicles")
    .select("*")
    .eq("id", vehicle_id)
    .single();

  if (!vehicle.isAvailable)
    return res.status(400).json({ msg: "Vehicle not available" });

  if (passengers > vehicle.allowed_passengers)
    return res.status(400).json({ msg: "Passenger limit exceeded" });

  await supabase.from("vehicles")
    .update({ isAvailable: false })
    .eq("id", vehicle_id);

  const { data } = await supabase.from("trips").insert([{
    customer_id,
    vehicle_id,
    passengers,
    distance_km
  }]);

  res.json(data);
};

