// class Dataholder {
var profile = null;
var Dataholder = async function getProfile() {
  if (profile == null) {
    const ipresponse = await fetch("https://testapi.io/api/vipinc007/profile");
    const ipjson = await ipresponse.json();
    profile = ipjson;
  }
  return profile;
};
// }

export default Dataholder;
