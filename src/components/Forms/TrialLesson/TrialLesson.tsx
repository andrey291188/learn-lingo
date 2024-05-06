import { IoClose } from "react-icons/io5";
import { Controller, useForm } from "react-hook-form";
import { DataType } from "../../RenderCard/typeDataCard";
import { StyledTrialFormsContainer } from "./TrialLesson.styled";

export interface TypeData {
  name: string;
  email: string;
  phone: string;
  reason: string;
}

interface TrialLessonType {
  data: DataType;
  toggleModal: (value: boolean) => void;
}

export default function TrialLesson({ data, toggleModal }: TrialLessonType) {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
    control,
  } = useForm<TypeData>({
    mode: "onChange",
  });
  const handleClick = () => {
    toggleModal(false);
  };

  const onSubmit = (value: TypeData) => {
    console.log(value);
    reset();
    toggleModal(false);
  };

  return (
    <StyledTrialFormsContainer>
      <button className="close-button" onClick={handleClick} type="button">
        <IoClose size={24} color="black" />
      </button>
      <h3>Book trial lesson</h3>
      <p>
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <h4>What is your main reason for learning English?</h4>
        <Controller
        name="reason"
        control={control}
        defaultValue="career_and_business"
        render={({ field }) => (
            <div className="radio-reason">
            <label>
              <input className="radio-buttom visually-hidden"
                type="radio"
                value="career_and_business"
                onChange={() => field.onChange('career_and_business')}
                checked={field.value === 'career_and_business'}
              />
              <span className="custom-chekbox">
              <span></span>
              </span>
              Career and business
            </label>
            <label>
              <input className="radio-buttom visually-hidden"
                type="radio"
                value="lesson_for_kids"
                onChange={() => field.onChange('lesson_for_kids')}
                checked={field.value === 'lesson_for_kids'}
              />
              <span className="custom-chekbox">
              <span></span>
              </span>
              Lesson for kid_
            </label>
            <label>
              <input className="radio-buttom visually-hidden"
                type="radio"
                value="living_abroad"
                onChange={() => field.onChange('living_abroad')}
                checked={field.value === 'living_abroad'}
              />
              <span className="custom-chekbox">
              <span></span>
              </span>
              Living abroad
            </label>
            <label>
              <input className="radio-buttom visually-hidden"
                type="radio"
                value="exams_and_coursework"
                onChange={() => field.onChange('exams_and_coursework')}
                checked={field.value === 'exams_and_coursework'}
              />
              <span className="custom-chekbox">
              <span></span>
              </span>
              Exams and coursework
            </label>
            <label>
              <input className="radio-buttom visually-hidden"
                type="radio"
                value="culture_travel_or_hobby"
                onChange={() => field.onChange('culture_travel_or_hobby')}
                checked={field.value === 'culture_travel_or_hobby'}
              />
              <span className="custom-chekbox">
                <span></span>
              </span>
              Culture, travel or hobby
            </label>
          </div>
        )}
      />
        <div>
          <label>
            <input
              {...register("name", {
                required: "Field is required",
                minLength: {
                  value: 2,
                  message: "Min length 2 letters",
                },
                maxLength: {
                  value: 36,
                  message: "Max length 36 letters",
                },
              })}
              placeholder="Full name"
              type="text"
              pattern="[a-zA-Zа-яА-ЯіІїЇ]+"
              title="Mike"
            />
          </label>
          <div>
            {errors?.name?.message && (
              <p>{`${errors?.name?.message}` || "Error!"}</p>
            )}
          </div>
        </div>
        <div>
          <label>
            <input
              {...register("email", {
                required: "Field is required",
                minLength: {
                  value: 2,
                  message: "Min length 2 letters",
                },
                maxLength: {
                  value: 36,
                  message: "Max length 36 letters",
                },
              })}
              placeholder="Email"
              type="email"
            />
          </label>
          <div>
            {errors?.email?.message && (
              <p>{`${errors?.email?.message}` || "Error!"}</p>
            )}
          </div>
        </div>
        <div>
          <label>
            <input
              {...register("phone", {
                required: "Field is required",
                minLength: {
                  value: 2,
                  message: "Min length 2 letters",
                },
                maxLength: {
                  value: 36,
                  message: "Max length 36 letters",
                },
              })}
              placeholder="Phone number"
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
              title="xxx-xxx-xx-xx"
            />
          </label>
          <div>
            {errors?.phone?.message && (
              <p>{`${errors?.phone?.message}` || "Error!"}</p>
            )}
          </div>
        </div>
        <button type="submit" disabled={!isValid}>Book</button>
      </form>
    </StyledTrialFormsContainer>
  );
}
