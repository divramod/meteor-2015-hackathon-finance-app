Accounts.onCreateUser(function(options, user) {
  console.log("account created");

  // =========== [  ] ===========
  var group = {
    name: user.username,
    members: [],
    owner: user._id,
    creator: user._id
  };
  group.members.push(user._id);

  // =========== [ create group ] ===========
  var insertedGroup = groups.insert(group); 

  user.groups = [];
  user.groups.push(insertedGroup._id);

  return user;
});
