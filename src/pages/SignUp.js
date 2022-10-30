export default function SignUp() {
  return (
    <div className="signup-form">
      <h1>Sign up</h1>
      <form action="">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" autoComplete="on" />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          autoComplete="on"
        />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}
