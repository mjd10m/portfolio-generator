const profileDataArgs = process.argv.slice(2, process.argv.length);

const printProfileData = (profileDataArr) => {
    profileDataArr.forEach((profileitem) => console.log(profileitem))
};

printProfileData(profileDataArgs);
