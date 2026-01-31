

const supabase = require("../config/supabase");

exports.signup = async (req, res) => {
  const { name, email, password, role } = req.body;

  if (!["customer","owner","driver"].includes(role))
    return res.status(400).json({ msg: "Invalid role" });

  const { data, error } = await supabase
    .from("users")
    .insert([{ name, email, password, role }]);

  if (error) return res.status(400).json(error);
  res.json({ message: "User created", data });
};
