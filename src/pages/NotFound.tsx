import { Link } from "react-router-dom";

export default function NotFound() {
  
  return (
    <div className="relative flex flex-col items-center justify-center h-screen text-center px-4">
      <title>404 - ページが見つかりません | 株式会社SPAQ</title>
      <meta name="description" content="お探しのページが見つかりません。SPAQ COREの公式サイトへお戻りください。" />
      <meta name="robots" content="noindex, follow" />
      <h1 className="absolute bottom-0 text-9xl md:text-[12rem] font-black text-gray-50 select-none pointer-events-none z-0">
        404
      </h1>
      <div className="relative z-10">
        <h1 className="text-xl md:text-2xl font-semibold mt-6">ページが見つかりません</h1>
        <p className="mt-4 text-lg md:text-xl text-gray-500">お探しのページは移動または削除された可能性があります。</p>
        <Link to="/" className="inline-block mt-6 underline">トップページへ戻る</Link>
      </div>
    </div>
  );
}
