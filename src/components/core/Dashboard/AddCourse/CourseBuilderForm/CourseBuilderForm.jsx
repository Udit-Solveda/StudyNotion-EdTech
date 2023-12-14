import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import IconBtn from "../../../../common/IconBtn";
import { MdAddCircleOutline,MdNavigateNext } from "react-icons/md";

import {useSelector} from "react-redux";
function CourseBuilderForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const { editSectionName, setEditSectionName } = useState(null);
  const {course} = useSelector((state)=>state.course)
  const cancelEdit = () => {
    setEditSectionName(null);
    setValue("sectionName", "");
  };
  return (
    <div>
      <p>Course Builder</p>
      <form>
        <div>
          <labe>Section name</labe>
          <input
            id="sectionName"
            placeholder="Add section name"
            {...register("sectionName", { required: true })}
            className="w-full"
          />
          {errors.sectionName && <span> Section Name is required</span>}
        </div>
        <div className="mt-10 flex w-full">
          <IconBtn
            type="submit"
            text={editSectionName ? "Edit Section Name" : "Create Section"}
            outline={true}
            customClasses={"text-white"}
          >
            <MdAddCircleOutline className="text-yellow-50" size={20} />
          </IconBtn>
          {editSectionName && (
            <button
              type="button"
              onClick={cancelEdit}
              className="text-sm text-richblack-300 underline"
            >
              Cancel Edit
            </button>
          )}
        </div>
      </form>
      {/* {course.courseContent.length > 0 && (
        // <NestedView handleChangeEditSectionName={handleChangeEditSectionName} />
      )} */}
      {/* Next Prev Button */}
      <div className="flex justify-end gap-x-3">
        <button
          onClick={goBack}
          className={`flex cursor-pointer items-center gap-x-2 rounded-md bg-richblack-300 py-[8px] px-[20px] font-semibold text-richblack-900`}
        >
          Back
        </button>
        <IconBtn disabled={loading} text="Next" onclick={goToNext}>
          <MdNavigateNext />
        </IconBtn>
      </div>
    </div>
  );
}

export default CourseBuilderForm;
