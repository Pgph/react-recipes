export default function Login() {
  return (
    <div className="login-form">
      <h1>Login</h1>
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
        <a href="/">Forgot password</a>
        <a href="/">Reset password</a>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
