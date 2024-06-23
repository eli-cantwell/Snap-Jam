export default function Register() {
  return (
    <div>
      <form>
        <label htmlFor="username">User Name:</label>
        <input type="text" id="username" name="username"></input>
        <label htmlFor="fullname">Full Name:</label>
        <input type="text" id="fullname" name="fullname"></input>
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email"></input>
        <button>Submit</button>
      </form>
    </div>
  )
}
