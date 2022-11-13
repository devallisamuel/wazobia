import { Modal,} from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


import { Imodals } from "utility/utility";


export const Modals = (props: any | Imodals) => {
   const { name, note, setopen:setOpen } = props;

   const FormSchema = Yup.object().shape({
     name: Yup.string().required("Name can't be empty"),
     note: Yup.string().required("Note can't be empty"),
   });

   function handleSubmit (values:any, actions:any) {
    if(props?.update)  {

    } else {

    }
   }

  return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Create Item
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-2">
          <div>
            <Formik
              initialValues={{
                name: name.length > 0 ? name : "",
                note: note.length > 0 ? note : "",
              }}
              onSubmit={handleSubmit}
              validationSchema={FormSchema}
              enableReinitialize={true}
            >
              {(props) => (
                <Form>
                  <div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-sm ">
                        Name
                      </label>
                      <Field
                        name="name"
                        type="text"
                        validate={FormSchema}
                        className="rounded-md w-full mt-2 border-2 border-slate-100 h-10 indent-2 focus:outline-0"
                        placeholder="Type Here"
                      />
                      <ErrorMessage name="name">
                        {(errors) => (
                          <p className="text-red-400 text-left text-sm">
                            {errors}
                          </p>
                        )}
                      </ErrorMessage>
                    </div>
                    <div className="flex flex-col gap-2 mt-2">
                      <label htmlFor="note" className="text-sm">
                        Add Note
                      </label>
                      <Field
                        name="note"
                        validate={FormSchema}
                        type="text"
                        as="textarea"
                        className="rounded-md w-full mt-2 border-2 border-slate-100 h-20 indent-2 focus:outline-0"
                        placeholder="Type Here"
                        rows={10}
                        cols={10}
                      />
                      <ErrorMessage name="note">
                        {(errors) => (
                          <p className="text-red-400 text-left text-sm">
                            {errors}
                          </p>
                        )}
                      </ErrorMessage>
                    </div>

                    <div className="flex justify-end gap-3 mt-4">
                      <button
                        type="submit"
                        className="bg-white rounded-md border-2 border-slate-400 text-black w-[5rem] p-1"
                        onClick={() => setOpen(false)}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="bg-slate-400 text-white rounded-md w-[7rem] p-1"
                      >
                        Create Event
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </Modal.Body>
      </Modal>
  );
};
