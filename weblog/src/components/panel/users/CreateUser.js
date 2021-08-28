import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import usersService from "../../../services/usersService";

function CreateUser() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      if (!loading) {
        setLoading(true);
        await usersService.createUser(data.name, data.email);
        reset();
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <div>
      <div className="d-flex flex-row align-items-center justify-content-between mb-4 mb-lg-5">
        <h2 className="m-0">ایجاد کاربر</h2>
        <Link className="btn btn-secondary" to="/panel/users">
          بازگشت
        </Link>
      </div>
      <form method="post" onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="mb-3">
              <label for="name" class="form-label">
                نام و نام خانوادگی
              </label>
              <input
                type="text"
                className={`form-control ${
                  errors?.name?.message ? "is-invalid" : ""
                }`}
                id="name"
                {...register("name", {
                  required: "لطفا نام کاربر را وارد کنید",
                })}
              />
              <div class="invalid-feedback">{errors?.name?.message}</div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="mb-3">
              <label for="email" class="form-label">
                ایمیل
              </label>
              <input
                type="email"
                className={`form-control ${
                  errors?.email?.message ? "is-invalid" : ""
                }`}
                id="email"
                {...register("email", {
                  required: "لطفا ایمیل کاربر را وارد کنید",
                })}
              />
              <div class="invalid-feedback">{errors?.email?.message}</div>
            </div>
          </div>
        </div>
        <button disabled={loading} type="submit" className="btn btn-primary">
          ذخیره
        </button>
      </form>
    </div>
  );
}

export default CreateUser;
