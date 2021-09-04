import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import authService from "../../services/authService";
import "./style.scss";

function Login() {
  const [loadin, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm();

  const onLogin = async (form) => {
    try {
      setLoading(true);
      const data = await authService.login(form.email, form.password);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="login-box">
      <div className="bg-white rounded shadow p-3 mb-3">
        <h3 className="pb-3 mb-4 border-bottom">ورود به حساب کاربری</h3>
        <form onSubmit={handleSubmit(onLogin)}>
          <div className="mb-3">
            <label for="email">ایمیل</label>
            <input
              type="email"
              className={`form-control ${errors?.email ? "is-invalid" : ""}`}
              id="email"
              {...register("email", {
                required: "آدرس ایمیل را وارد کنید",
              })}
            />
            <div className="invalid-feedback">{errors?.email?.message}</div>
          </div>
          <div className="mb-3">
            <label for="password">رمز عبور</label>
            <input
              type="password"
              className={`form-control ${errors?.password ? "is-invalid" : ""}`}
              id="password"
              {...register("password", {
                required: "رمز عبور خود را وارد کنید",
              })}
            />
            <div className="invalid-feedback">{errors?.password?.message}</div>
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            ورود
          </button>
          <div className="d-flex flex-column mt-3 pt-3 border-top">
            <Link to="/auth/register">ثبت نام</Link>
          </div>
        </form>
      </div>
      <Link className="text-white" to="/">
        <i className="fa fa-angle-right me-2"></i>
        بازگشت به خانه
      </Link>
    </div>
  );
}

export default Login;
