const User=require('../models/user.js')
// console.log(JSON.stringify(User));
async function handleGetAllUsers(req, res) {
    const allDbUsers = await User.find({});

    res.json(allDbUsers);
};

async function handleGetUserById(req, res) {
    const userid = req.params.id;
    const requser = await User.findById(userid);
    return res.json(requser);
};

async function handleUpdateUserById(req, res) {
    return res.status(201).json({ msg: "Updated user" });
}

async function handleDeleteUserById(req, res) {
     return res.status(201).json({ msg: 'Deleted user' });
}

async function handleCreateNewUser(req, res) {
    const body = req.body;
    // users.push({ id: users.length + 1, ...body });

    const result = await User.create({
      firstName: body.first_name,
      lastName: body.last_name,
      email: body.email,
      gender: body.gender,
      jobTitle: body.job_name,
    });

    // console.log('Result: ', result);

    res.status(201).send({ msg: 'Success' });
}

module.exports = { handleGetAllUsers,handleGetUserById,handleUpdateUserById,handleDeleteUserById,handleCreateNewUser };