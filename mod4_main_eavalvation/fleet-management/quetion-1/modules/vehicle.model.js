
exports.createVehicle = async (req, res) => {
  const { owner_id, name, allowed_passengers, rate_per_km } = req.body;

  const { data: owner } = await supabase
    .from("users")
    .select("*")
    .eq("id", owner_id)
    .single();

  if (owner.role !== "owner")
    return res.status(403).json({ msg: "Only owner allowed" });

  const { data, error } = await supabase
    .from("vehicles")
    .insert([{ owner_id, name, allowed_passengers, rate_per_km }]);

  if (error) return res.status(400).json(error);
  res.json(data);
};
