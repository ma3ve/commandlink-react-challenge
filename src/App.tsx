import "bootstrap/dist/css/bootstrap-grid.min.css"; // Import Bootstrap Grid CSS
import { useForm, Controller } from "react-hook-form";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { EFormAction, FormState } from "./types";
import { useNavigate } from "react-router-dom";
const jobTitleOptions = [
  "Engineer - lead",
  "Engineer - mid level",
  "Engineer - junior",
  "Engineer - front end focused",
  "Engineer - backend focused",
  "Engineer - full stack",
];

function App() {
  const dispatch = useDispatch<Dispatch>();
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormState>();

  const onSubmit = (data: FormState) => {
    // Handle form submission with valid data
    dispatch({ type: EFormAction.UPDATE, payload: data });
    navigate("/result");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <Controller
                name="firstName"
                control={control}
                rules={{ required: "First Name is required." }}
                render={({ field }) => (
                  <div>
                    <input
                      {...field}
                      type="text"
                      className={`form-control ${
                        errors.firstName ? "is-invalid" : ""
                      }`}
                      placeholder="First Name"
                      required
                    />
                    {errors.firstName && (
                      <div className="invalid-feedback">
                        {errors.firstName.message}
                      </div>
                    )}
                  </div>
                )}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <Controller
                name="lastName"
                control={control}
                rules={{ required: "Last Name is required." }}
                render={({ field }) => (
                  <div>
                    <input
                      {...field}
                      type="text"
                      className={`form-control ${
                        errors.lastName ? "is-invalid" : ""
                      }`}
                      placeholder="Last Name"
                      required
                    />
                    {errors.lastName && (
                      <div className="invalid-feedback">
                        {errors.lastName.message}
                      </div>
                    )}
                  </div>
                )}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: "Email is required.",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Invalid email address",
                  },
                }}
                render={({ field }) => (
                  <div>
                    <input
                      {...field}
                      type="email"
                      className={`form-control ${
                        errors.email ? "is-invalid" : ""
                      }`}
                      placeholder="Email"
                      required
                    />
                    {errors.email && (
                      <div className="invalid-feedback">
                        {errors.email.message}
                      </div>
                    )}
                  </div>
                )}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="address1">Address 1</label>
              <Controller
                name="address1"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className="form-control"
                    placeholder="Address 1"
                  />
                )}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="city">City</label>
              <Controller
                name="city"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className="form-control"
                    placeholder="City"
                  />
                )}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group ">
              <label htmlFor="state">State</label>
              <Controller
                name="state"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className="form-control"
                    placeholder="State"
                  />
                )}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group ">
              <label htmlFor="zip">ZIP</label>
              <Controller
                name="zip"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className="form-control"
                    placeholder="ZIP"
                  />
                )}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <Controller
                name="phone"
                control={control}
                rules={{
                  required: "Phone is required.",
                  pattern: {
                    value:
                      /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                    message: "Invalid Phone Number",
                  },
                }}
                render={({ field }) => (
                  <div>
                    <input
                      {...field}
                      type="text"
                      className={`form-control ${
                        errors.phone ? "is-invalid" : ""
                      }`}
                      placeholder="Phone"
                      required
                    />
                    {errors.phone && (
                      <div className="invalid-feedback">
                        {errors.phone.message}
                      </div>
                    )}
                  </div>
                )}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="jobTitle">Job Title</label>
              <Controller
                name="jobTitle"
                control={control}
                rules={{ required: "Job Title is required." }}
                render={({ field }) => (
                  <div>
                    <select
                      {...field}
                      className={`form-control ${
                        errors.jobTitle ? "is-invalid" : ""
                      }`}
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Please select job title
                      </option>{" "}
                      {jobTitleOptions.map((title) => (
                        <option key={title} value={title}>
                          {title}
                        </option>
                      ))}
                    </select>
                    {errors.jobTitle && (
                      <div className="invalid-feedback">
                        {errors.jobTitle.message}
                      </div>
                    )}
                  </div>
                )}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <label htmlFor="reason">Reason for Application</label>
              <Controller
                name="reason"
                control={control}
                rules={{ required: "Reason for Application is required." }}
                render={({ field }) => (
                  <div>
                    <textarea
                      {...field}
                      className={`form-control ${
                        errors.reason ? "is-invalid" : ""
                      }`}
                      placeholder="Describe why you are a good fit for the job you are applying for."
                    />
                    {errors.reason && (
                      <div className="invalid-feedback">
                        {errors.reason.message}
                      </div>
                    )}
                  </div>
                )}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
