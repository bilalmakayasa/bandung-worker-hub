type SmallHighlightCounterProps = {
    number: number | string; // Accepts numbers or strings for flexibility
    description: string; // Accepts the dynamic description text
  };

export default function SmallHighlightCounter({ number, description }: SmallHighlightCounterProps)  {
    return (
        <div className="py-2 relative bg-white w-48 h-48 text-center rounded-2xl shadow-lg flex flex-col items-center space-between">
            <div className="font-title text-center text-3xl font-bold text-main">{number}</div>
            <div className="px-5 text-sm text-md font-title mt-8 text-main tracking-tight leading-none text-title">{description}</div>
        </div>
    )
}