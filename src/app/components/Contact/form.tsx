// import { useState } from "react";
// import axios from "axios";
// import { useForm } from "react-hook-form";

// function ContactUs() {
//   const { register, handleSubmit, reset } = useForm();
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const onSubmit = async (data) => {
//     setIsSubmitting(true);

//     try {
//       await axios.post("/send-email", {
//         email: data.email,
//         name: data.name,
//         message: data.message,
//         recipient: "test@gmail.com",
//       });

//       // Reset the form after successful submission
//       reset();
//     } catch (error) {
//       console.error(error);
//     }

//     setIsSubmitting(false);
//   };

//   return (
//     <div>
//       <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
//         {/* Your form inputs */}
//         <TextInput
//           label="Email"
//           placeholder="your@email.com"
//           required
//           {...register("email")}
//           classNames={{ input: classes.input, label: classes.inputLabel }}
//         />
//         <TextInput
//           label="Name"
//           placeholder="John Doe"
//           mt="md"
//           {...register("name")}
//           classNames={{ input: classes.input, label: classes.inputLabel }}
//         />
//         <Textarea
//           required
//           label="Your message"
//           placeholder="I want to order your goods"
//           minRows={4}
//           mt="md"
//           {...register("message")}
//           classNames={{ input: classes.input, label: classes.inputLabel }}
//         />

//         <Group justify="flex-end" mt="md">
//           <Button type="submit" className={classes.control} disabled={isSubmitting}>
//             {isSubmitting ? "Sending..." : "Send message"}
//           </Button>
//         </Group>
//       </form>
//     </div>
//   );
// }