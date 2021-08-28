import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import usersService from "../../../services/usersService";

function EditUser() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm();
  const onSubmit = async (data) => {
    try {
      if (!loading) {
        setLoading(true);
        await usersService.updateUser(id, data.name, data.email);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const getUser = async () => {
    try {
      if (id) {
        setLoading(true);
        const user = await usersService.getUser(id);
        setValue("name", user.name, { shouldValidate: true });
        setValue("email", user.email, { shouldValidate: true });
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <div className="d-flex flex-row align-items-center justify-content-between mb-4 mb-lg-5">
        <h2 className="m-0">ویرایش کاربر</h2>
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

export default EditUser;
