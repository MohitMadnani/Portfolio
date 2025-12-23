export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 px-6 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-4xl mx-auto text-center text-sm text-zinc-600 dark:text-zinc-400">
        <p>MOHIT MADNANI ©{currentYear}</p>
      </div>
    </footer>
  );
}

