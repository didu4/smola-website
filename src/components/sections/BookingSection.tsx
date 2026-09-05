import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "../ui/Button";

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
    defaultValues: {
      agreement: false,
    },
  });

  const onSubmit = (data: BookingFormData) => {
    console.log("Форма отправлена:", data);
    alert("Заявка отправлена! (пока заглушка)");
    reset();
  };

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-2xl">
        {/* Синий блок */}
        <div className="bg-secondary rounded-4xl p-6 md:p-8">
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold text-center mb-8 text-secondary-foreground">
            Запишитесь на пробное занятие
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <input
                {...register("name")}
                type="text"
                placeholder="Имя Фамилия"
                className="w-full px-4 py-3 text-2xl bg-white text-foreground placeholder:text-foreground/60 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.name && (
                <p className="text-red-300 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <input
                {...register("email")}
                type="email"
                placeholder="example@email.com"
                className="w-full px-4 py-3 text-2xl bg-white text-foreground placeholder:text-foreground/60 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.email && (
                <p className="text-red-300 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <input
                {...register("phone")}
                type="tel"
                placeholder="+7 (000) 000-00-00"
                className="w-full px-4 py-3 text-2xl bg-white text-foreground placeholder:text-foreground/60 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.phone && (
                <p className="text-red-300 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              variant="accent"
              className="w-full text-2xl py-4 rounded-xl"
            >
              Записаться на занятие
            </Button>

            {/* Чекбокс согласия */}
            <div className="flex items-start gap-3 mt-4">
              <div className="flex items-center h-6">
                <input
                  {...register("agreement")}
                  type="checkbox"
                  id="agreement"
                  className="w-5 h-5 bg-white border-2 border-white rounded checked:bg-primary checked:border-primary focus:ring-2 focus:ring-primary cursor-pointer"
                />
              </div>
              <label
                htmlFor="agreement"
                className="text-sm text-secondary-foreground/90 leading-tight cursor-pointer"
              >
                Нажимая кнопку, я соглашаюсь с политикой конфиденциальности
              </label>
            </div>
            {errors.agreement && (
              <p className="text-red-300 text-sm">{errors.agreement.message}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
