import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import authService from "../../services/authService";
import "./style.scss";

function Register() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    getValues,
    formState: { errors },
  } = useForm();

  const onRegister = async ({ name, email, password, password_confirm }) => {
    try {
      setLoading(true);
      const data = await authService.register(
        name,
        email,
        password,
        password_confirm
      );
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  console.log(errors?.password_confirm);

  return (
    <div className="register-box">
      <div className="bg-white rounded shadow p-3 mb-3">
        <h3 className="pb-3 mb-4 border-bottom">ایجاد حساب کاربری</h3>
        <form onSubmit={handleSubmit(onRegister)}>
          <div className="mb-3">
            <label for="name">نام و نام خانوادگی</label>
            <input
              type="text"
              className={`form-control ${errors?.name ? "is-invalid" : ""}`}
              {...register("name", {
                required: "لطفا نام و نام خانوادگی خود را وارد کنید",
                maxLength: {
                  value: 50,
                  message: "نام و نام خانوادگی طولانی می باشد",
                },
              })}
              id="name"
            />
            <div className="invalid-feedback">{errors?.name?.message}</div>
          </div>
          <div className="mb-3">
            <label for="email">ایمیل</label>
            <input
              type="email"
              className={`form-control ${errors?.email ? "is-invalid" : ""}`}
              id="email"
              {...register("email", {
                required: "آدرس ایمیل خود را وارد کنید",
                maxLength: {
                  value: 200,
                  message: "آدرس ایمیل طولانی می باشد",
                },
              })}
            />
            <div className="invalid-feedback">{errors?.email?.message}</div>
          </div>
          <div className="mb-3">
            <label for="password">رمز عبور</label>
            <input
              type="password"
              className={`form-control ${errors?.password ? "is-invalid" : ""}`}
              {...register("password", {
                required: "رمز عبور خود را وارد کنید",
                minLength: {
                  value: 6,
                  message: "حداقل طول رمز عبور 6 کاراکتر می باشد",
                },
                pattern: {
                  value:
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
                  message:
                    "رمز عبور باید شامل حروف، عدد و حداقل یک کاراکتر خاص باشد",
                },
              })}
              id="password"
            />
            <div className="invalid-feedback">{errors?.password?.message}</div>
          </div>
          <div className="mb-3">
            <label for="password_confirm">تکرار رمز عبور</label>
            <input
              type="password"
              className={`form-control ${
                errors?.password_confirm ? "is-invalid" : ""
              }`}
              id="password_confirm"
              {...register("password_confirm", {
                required: "تکرار رمز عبور را وارد کنید",
                validate: (password_confirm) => {
                  if (password_confirm !== watch("password")) {
                    return "تکرار کلمه عبور مطابقت ندارد";
                  }
                  return true;
                },
              })}
            />
            <div className="invalid-feedback">
              {errors?.password_confirm?.message}
            </div>
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            ثبت نام
          </button>
          <div className="d-flex flex-column mt-3 pt-3 border-top">
            <Link to="/auth/login">ورود به حساب کاربری</Link>
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

export default Register;
