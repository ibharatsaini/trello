import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { useFormContext } from "react-hook-form";

function Field({
  name,
  title,
  description,
}: {
  name: string;
  title: string;
  description?: string;
}) {
  const form = useFormContext();
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-left">{title}</FormLabel>
          <FormControl>
            <Input placeholder="" {...field} />
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default Field;
