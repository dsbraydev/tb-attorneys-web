import Image from "next/image";

// TODO(content): these are the template's placeholder "Logoipsum" logos. Replace with real
// partner logos (or remove the section) before launch.
const logos = ["logo-55", "logo-54", "logo-52", "logo-51"];

export function LogoStrip() {
  const row = [...logos, ...logos, ...logos];

  return (
    <section className="pb-[var(--space-48)] pt-12">
      <div className="container-main">
        <div className="flex items-center justify-between gap-[42px] tablet:flex-col tablet:text-center">
          <div className="w-1/4 tablet:w-full">
            <h2 className="heading-6">Trusted by 100+ Companies</h2>
          </div>
          <div className="flex h-[50px] w-[70%] overflow-hidden tablet:w-full" aria-hidden>
            <div className="flex w-max animate-[marquee_30s_linear_infinite] items-center gap-9 motion-reduce:animate-none">
              {[...row, ...row].map((logo, index) => (
                <Image
                  key={index}
                  src={`/images/${logo}.svg`}
                  alt=""
                  width={140}
                  height={40}
                  className="h-10 w-auto max-w-none mix-blend-multiply"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
