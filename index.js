// create a promise that resolves in 4 sec and returns "success" string

const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('success');
	}, 4000);
})

// Run the above promise and make it console.log "success"

const p = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('success');
	}, 4000);
}).then(data=>console.log(data));

// Read about Promise.resolve() and Promise.reject(). How can you make the above promise
// shorter with Promise.resolve() and console loggin "success"

const promiseShort=Promise.resolve("success").then(console.log);

// Convert the below promise into async await fetch("https://jsonplaceholder.typicode.com/users/")
// .then((response) => response.json()).then(console.log);
const fetchUsers=async()=>{
	try {
		const res=await fetch("https://jsonplaceholder.typicode.com/users/");
		const data=await res.json();
		return data;
	} catch (err) {
		console.log(err);
	}
}

// Update the function below to  have async await for this line: fetch(url)
// .then(resp => resp.json()) So there shouldn't be any .then() calls anymore!

// const urls = [
//   "https://jsonplaceholder.typicode.com/users",
//   "https://jsonplaceholder.typicode.com/posts",
//   "https://jsonplaceholder.typicode.com/albums",
// ];

// const getData = async function () {
//   const [users, posts, albums] = await Promise.all(
//     urls.map((url) => fetch(url).then((resp) => resp.json())),
//   );
//   console.log("users", users);
//   console.log("posts", posts);
//   console.log("albums", albums);
// };
const urls = [
	"https://jsonplaceholder.typicode.com/users",
	"https://jsonplaceholder.typicode.com/posts",
	"https://jsonplaceholder.typicode.com/albums",
	];
	
	const getData = async () => {
		const PromisedData = await Promise.all(urls.map(url =>fetch(url)));
	   const [users, posts, albums]= await Promise.all(PromisedData.map(res => res.json()));
		console.log("users", users);
		console.log("posts", posts);
		console.log("albums", albums);
	
	return [users, posts, albums];
	}

// Add a try catch block to the Ques-4) solution in order to catch any errors. Now, use the 
// given array containing an invalid url, so you console.log your error with 'oooooops'.
// const urls = [
//   "https://jsonplaceholder.typicode.com/users",
//   "https://jsonplaceholdeTYPO.typicode.com/posts",
//   "https://jsonplaceholder.typicode.com/albums",
// ];
const templateFetch = async (url) => {
	try {  const response = await fetch(url);
	   const data = await response.json();
	   return data;
	 }
   
	 catch(e){
	   console.log('oooooops',e.message);
	 }
   }
   const URLs = [
	"https://jsonplaceholder.typicode.com/users",
	"https://jsonplaceholdeTYPO.typicode.com/posts",
	"https://jsonplaceholder.typicode.com/albums",
	];
	
	const Promises=URLs.map(async(url)=>await templateFetch(url));
	Promise.all(Promises).then(console.log);
