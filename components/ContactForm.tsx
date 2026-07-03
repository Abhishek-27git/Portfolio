'use client';
import { useActionState, useEffect, useState } from 'react';
import { toast } from 'sonner';
import { sendMessageServerAction } from '@/app/actions/sendMailServerAction';

const ContactForm = () => {
  const [state, action, isPending] = useActionState(
    sendMessageServerAction,
    null
  );
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    if (state?.success) {
      toast.success(state.success);
      setFormData({ fullname: '', email: '', message: '' });
    }
  }, [state?.success]);

  useEffect(() => {
    if (state?.error) {
      toast.error(state.error);
    }
  }, [state?.error]);

  const inputClass =
    'w-full font-sans text-[14px] text-foreground bg-background border border-border rounded-[10px] px-[14px] py-[12px] outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground';

  return (
    <form action={action} className="flex flex-col gap-[22px]">

      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-[13px] font-bold text-foreground mb-2"
        >
          Name<span className="text-muted-foreground font-normal">*</span>
        </label>
        <input
          id="name"
          type="text"
          name="fullname"
          placeholder="Your name, your fame"
          className={inputClass}
          value={formData.fullname}
          onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
        />
        {state?.fullnameError && (
          <span className="text-sm text-foreground font-medium mt-1 block">
            {state.fullnameError}
          </span>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-[13px] font-bold text-foreground mb-2"
        >
          Email<span className="text-muted-foreground font-normal">*</span>
        </label>
        <input
          id="email"
          type="text"
          name="email"
          placeholder="Where can I reach you back?"
          className={inputClass}
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <p className="text-[12px] text-muted-foreground mt-2">
          Temporary emails are also accepted, unless you wish to hear back 😉
        </p>
        {state?.emailError && (
          <span className="text-sm text-foreground font-medium mt-1 block">
            {state.emailError}
          </span>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-[13px] font-bold text-foreground mb-2"
        >
          Message<span className="text-muted-foreground font-normal">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Your words, my inbox."
          rows={5}
          className={`${inputClass} resize-y min-h-[110px]`}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
        {state?.messageError && (
          <span className="text-sm text-foreground font-medium mt-1 block">
            {state.messageError}
          </span>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isPending}
        className="w-full font-sans text-[14px] font-bold rounded-[10px] px-4 py-[14px] cursor-pointer bg-foreground text-background border border-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {isPending ? 'Sending… 📨' : 'Submit'}
      </button>

      {/* Reset */}
      <button
        type="reset"
        className="w-full font-sans text-[14px] font-bold rounded-[10px] px-4 py-[14px] cursor-pointer bg-background text-foreground border border-border transition-colors hover:bg-muted"
        onClick={() => setFormData({ fullname: '', email: '', message: '' })}
      >
        Reset
      </button>

    </form>
  );
};

export default ContactForm;
