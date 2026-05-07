type statusType = "idle"|"loading" | "Success" | "failed";

export const StatusBanner = ({ status }: any) => {
  if (!status) return null;

  let message = "";

  if (typeof status === "string") {
    message = status;
  } else if (status.message) {
    message = status.message.includes("Email not confirmed")
      ? "Please verify your email to continue."
      : status.message;
  } else if (status.error_description) {
    message = status.error_description;
  } else if (status.error && typeof status.error === "string") {
    message = status.error;
  } else {
    message = "An unexpected error occurred. Please try again.";
  }

  return (
    <p className="text-red-600 text-center mb-5 bg-red-200/50 py-3 px-4 rounded-2xl text-[11px] font-technical font-black uppercase tracking-widest border border-red-500/20 animate-reveal">
      {message}
    </p>
  );
};

