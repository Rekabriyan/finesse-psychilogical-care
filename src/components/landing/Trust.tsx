const Trust = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#1F555C] via-[#3A727A] to-[#35676E] py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-md text-white space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Dipercaya oleh Berbagai Kalangan
          </h2>
          <p className="text-gray-200 text-sm md:text-base opacity-90 leading-relaxed">
            Dari individu hingga perusahaan, kami telah membantu berbagai klien
            dalam perjalanan mereka menuju kesejahteraan psikologis.
          </p>
        </div>

        <div className="flex flex-wrap justify-center md:justify-end gap-8 md:gap-16 text-white">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-5xl font-bold">300+</span>
            <p className="text-gray-200 text-sm mt-2">Klien Individual</p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <span className="text-5xl font-bold">20+</span>
            <p className="text-gray-200 text-sm mt-2">Perusahaan</p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <span className="text-5xl font-bold">20+</span>
            <p className="text-gray-200 text-sm mt-2">Komunitas</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
