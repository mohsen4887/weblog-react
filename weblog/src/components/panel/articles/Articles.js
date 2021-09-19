import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useForm, Controller } from "react-hook-form";
import { useEffect } from "react";
import { baseUrl } from "../../../services/base";
import usersService from "../../../services/usersService";

function Articles() {
  const {
    handleSubmit,
    register,
    getValues,
    setValue,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      await usersService.uploadImage(data.image[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    register("description", {
      required: "لطفا محتوای مقاله را وارد کنید",
    });
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <CKEditor
            editor={ClassicEditor}
            data="<p>Hello from CKEditor 5!</p>"
            onReady={(editor) => {
              const data = editor.getData();
              setValue("description", data);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              setValue("description", data);
            }}
          />
          {!!errors?.description && (
            <p className="text-danger">
              <small>{errors?.description?.message}</small>
            </p>
          )}
        </div>
        <input
          type="file"
          {...register("image", {
            required: "لطفا تصویر مقاله را انتخاب کنید",
          })}
          className="form-control mb-4"
        />
        <button className="btn btn-primary" type="submit">
          ذخیره
        </button>
      </form>
    </div>
  );
}
export default Articles;
