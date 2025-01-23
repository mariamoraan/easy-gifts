export const formatDate = (date: Date, options?: Intl.DateTimeFormatOptions) =>
  date.toLocaleDateString(
    undefined,
    options
      ? options
      : {
          day: "2-digit",
          month: "short",
        }
  );
