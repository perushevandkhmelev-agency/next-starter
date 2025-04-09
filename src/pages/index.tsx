import Icon from '#/components/Icon'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <ol className="list-inside list-decimal text-center text-sm sm:text-left">
        <li className="mb-2">
          Get started by editing{' '}
          <code className="rounded bg-black/[.05] px-1 py-0.5 font-semibold">src/pages/index.tsx</code>.
        </li>
        <li>Save and see your changes instantly.</li>
      </ol>
      <Icon name="heart" className="mt-6 block text-red-500" />
    </main>
  )
}
