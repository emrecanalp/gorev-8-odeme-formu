import { useMemo, useState, type ChangeEvent, type FormEvent } from "react";

export default function PaymentForm() {

    const [name, setName] = useState<string>("");
    const [cardNumber, setCardNumber] = useState<string>("");
    const [month, setMonth] = useState<string>("");
    const [year, setYear] = useState<string>("");
    const [cvv, setCvv] = useState<string>("");


    const years = useMemo<number[]>(() => {
        const start = new Date().getFullYear();
        return Array.from({ length: 10 }, (_, i) => start + i);
    }, []);


    const handleCardNumber = (v: string) => {
        const digits = v.replace(/\D/g, "").slice(0, 16);
        const grouped = digits.replace(/(\d{4})(?=\d)/g, "$1 ");
        setCardNumber(grouped);
    };


    const handleCvv = (v: string) => {
        setCvv(v.replace(/\D/g, "").slice(0, 4));
    };

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = { name, cardNumber, month, year, cvv };
        alert(JSON.stringify(data, null, 2));
    };

    return (
        <div className="w-full max-w-2xl rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h1 className="text-3xl font-extrabold tracking-tight">Ödeme Bilgileri</h1>
            <p className="mt-1 text-gray-500">Kredi kartı bilgilerinizi giriniz</p>

            <form onSubmit={onSubmit} className="mt-8 space-y-6">
                <div>
                    <label className="block text-base font-semibold text-gray-900">
                        Kart Üzerindeki İsim
                    </label>
                    <input
                        type="text"
                        placeholder="Emre Can ALPDOĞAN"
                        value={name}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                        required
                        className="mt-2 w-full h-12 rounded-xl border border-gray-200 bg-gray-50 px-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black"
                    />
                </div>

                <div>
                    <label className="block text-base font-semibold text-gray-900">
                        Kart Numarası
                    </label>
                    <input
                        inputMode="numeric"
                        autoComplete="cc-number"
                        placeholder="0000 0000 0000 0000"
                        value={cardNumber}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleCardNumber(e.target.value)}
                        required
                        className="mt-2 w-full h-12 rounded-xl border border-gray-200 bg-gray-50 px-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black"
                    />
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    <div>
                        <label className="block text-base font-semibold text-gray-900">Ay</label>
                        <div className="relative mt-2">
                            <select
                                value={month}
                                onChange={(e: ChangeEvent<HTMLSelectElement>) => setMonth(e.target.value)}
                                required
                                className="w-full h-12 appearance-none rounded-xl border border-gray-200 bg-white px-4 pr-10 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black"
                            >
                                <option value="" disabled>AA</option>
                                {Array.from({ length: 12 }, (_, i) => {
                                    const m = String(i + 1).padStart(2, "0");
                                    return <option key={m} value={m}>{m}</option>;
                                })}
                            </select>
                            <svg
                                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>

                    <div>
                        <label className="block text-base font-semibold text-gray-900">Yıl</label>
                        <div className="relative mt-2">
                            <select
                                value={year}
                                onChange={(e: ChangeEvent<HTMLSelectElement>) => setYear(e.target.value)}
                                required
                                className="w-full h-12 appearance-none rounded-xl border border-gray-200 bg-white px-4 pr-10 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black"
                            >
                                <option value="" disabled>YY</option>
                                {years.map((y) => {

                                    const yy = String(y).slice(-2);
                                    return <option key={y} value={String(y)}>{y}</option>;
                                })}
                            </select>
                            <svg
                                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>

                    <div>
                        <label className="block text-base font-semibold text-gray-900">Güvenlik Kodu</label>
                        <input
                            inputMode="numeric"
                            placeholder="123"
                            value={cvv}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => handleCvv(e.target.value)}
                            required
                            className="mt-2 w-full h-12 rounded-xl border border-gray-200 bg-white px-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full h-12 rounded-xl bg-black text-white font-semibold hover:bg-black/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                    Şimdi Öde
                </button>
            </form>
        </div>
    );
}