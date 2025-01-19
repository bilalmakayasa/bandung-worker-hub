type SmallHighlightCounterProps = {
    number: number | string; // Accepts numbers or strings for flexibility
    description: string; // Accepts the dynamic description text
  };

export default function SmallHighlightCounter({ number, description }: SmallHighlightCounterProps)  {
    return (
        <div className="py-2 relative bg-white w-40 h-40 text-center rounded-md shadow-lg flex flex-col items-center justify-center">
            <div className="font-title text-center text-3xl font-bold text-main">{number}</div>
            <div className="px-5 text-sm text-md font-normal mt-2 text-main tracking-tight leading-none text-title">{description}</div>
        </div>
    )
}