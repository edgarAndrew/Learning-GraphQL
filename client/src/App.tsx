import { useLazyQuery,useMutation } from "@apollo/client"
import { getUsers,addUsers } from "./graphql/query/query"

type UserType = {
  _id: string
  name: string
  age: number
}

const App = () => {
  
  // loading, data, error are provided by default without using redux or other state management
  
  // useQuery is a hook provided by apollo client which is executed on every render
  //const {loading,data,error} =  useQuery(gql(getUsers))
 
  // if we wish to trigger query on some event then, we use useLazyQuery
  const [getUsersTrigger, {loading,data,error}] = useLazyQuery<{users:UserType[]}>(getUsers)

  // if we wish to trigger mutation on some event then, we use useMutation
  const [addUserTrigger,{data:postData,loading:postLoading,error:postError}] = 
      useMutation<{addUser:string},{name:string,age:number,email:string,password:string}>(addUsers)

    // return type is a string, and the data type of variables are mentioned
  
  if(error || postError)
    return (
      <div>
        <h1>Some error</h1>
      </div>
    )
  else
    if(loading || postLoading)
      return (
        <div>
          <h1>Loading</h1>
        </div>
      )
    else
        return (
          <div>
            <h1>Hello World</h1>
            

            <form onSubmit={(e)=>{
              e.preventDefault();
              const yolo = new FormData(e.target as HTMLFormElement)
              addUserTrigger({variables:{
                name: yolo.get("name")?.toString() || "",
                age: Number(yolo.get("age")),
                email: yolo.get("email")?.toString() || "",
                password: yolo.get("password")?.toString() || ""
              }})
            }}>
              <input type="text" name="name" placeholder="name" required/>
              <input type="number" name="age" placeholder="age" required/>
              <input type="email" name="email" placeholder="email" required/>
              <input type="password" name="password" placeholder="password" required/>
              <div>
                <button type="submit">Add User</button>
                <button onClick={() => getUsersTrigger()}>Get Users</button>
              </div>
              {
                postData && <h4>{postData.addUser}</h4>
              }
            </form>

            <div className="container">
              {
                data && data.users.map((el)=>
                  <div key={el._id}>
                    <h3>Name : {el.name}</h3>
                    <h3>Age : {el.age}</h3>
                  </div>
                )
              }
            </div>
          
          </div>
        )
}

export default App