const Conversation = () => {
  return (
    <div className="flex flex-col gap-4 xs:max-md:items-center">
      <p className="text-[14px] text-gold">Napisz Do Nas</p>
      <div className="flex flex-col items-start gap-2 text-white xs:max-md:items-center">
        <a
          href="mailto:inquiry@classcarsllc.com"
          className="inline text-white transition-all duration-200 hover:text-gold"
        >
          inquiry@classcarsllc.com
        </a>
        <a
          href="mailto:classcars.uae@gmail.com"
          className="inline text-white transition-all duration-200 hover:text-gold"
        >
          classcars.uae@gmail.com
        </a>
        <a
          href="tel:+971509021467"
          className="inline text-white transition-all duration-200 hover:text-gold"
        >
          +971-50-902-1467
        </a>
      </div>
    </div>
  );
};

export default Conversation;
