import axios from "axios";
const readline = require("readline-sync");
//#region Options

const options = ["Get User's Posts", "Get User's Albums"];

//#endregion

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});
let id: number;

//#region Main Method

Main();
async function Main() {
  GetUserById();
  let answer = readline.keyInSelect(options);
  answer++;
  switch (answer) {
    case 1:
      await GetUsersPosts();
      break;
    case 2:
      await GetUsersAlbums();
      break;
    default:
      console.log("Select proper answer");
      break;
  }
}

//#region Get User By Id

async function GetUserById() {
  id = readline.question("Enter User Id: ");
  let response = await instance.get(`/users/${id}`);
  id = response.data.id;
  return id;
}

//#endregion

//#region Get User Albums

async function GetUsersAlbums() {
  let response = await instance.get(`/users/${id}/albums`);
  let albums = response.data;
  console.log(albums);
  return albums;
}

//#endregion

//#region Get User Posts

async function GetUsersPosts() {
  let response = await instance.get(`/users/${id}/posts`);
  let posts = response.data;
  console.log(posts);
  return posts;
}

//#endregion
