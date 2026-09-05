import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import "../../styles/components/booking.scss";

const bookingSchema = z.object({
  name: z.string().min(2, "Введите имя и фамилию"),
  email: z.string().email("Введите корректный email"),
  phone: z.string().min(10, "Введите корректный номер телефона"),
  agreement: z
    .boolean()
    .refine((val) => val === true, "Необходимо согласие с политикой"),
});

type BookingFormData = z.infer<typeof bookingSchema>;

export const BookingSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: { agreement: false },
  });

  const onSubmit = (data: BookingFormData) => {
    console.log("Форма отправлена:", data);
    alert("Заявка отправлена! (пока заглушка)");
    reset();
  };

  return (
    <section className="booking">
      <div className="container">
        <div className="booking-card">
          <h2>Запишитесь на пробное занятие</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="field">
              <input
                {...register("name")}
                type="text"
                placeholder="Имя Фамилия"
                className="input"
              />
              {errors.name && <p className="error">{errors.name.message}</p>}
            </div>
            <div className="field">
              <input
                {...register("email")}
                type="email"
                placeholder="example@email.com"
                className="input"
              />
              {errors.email && <p className="error">{errors.email.message}</p>}
            </div>
            <div className="field">
              <input
                {...register("phone")}
                type="tel"
                placeholder="+7 (000) 000-00-00"
                className="input"
              />
              {errors.phone && <p className="error">{errors.phone.message}</p>}
            </div>

            <button type="submit" className="submit-btn">
              Записаться на занятие
            </button>

            <div className="agreement">
              <input
                {...register("agreement")}
                type="checkbox"
                id="agreement"
              />
              <label htmlFor="agreement">
                Нажимая кнопку, я соглашаюсь с политикой конфиденциальности
              </label>
            </div>
            {errors.agreement && (
              <p className="agreement-error">{errors.agreement.message}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
