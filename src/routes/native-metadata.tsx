type Post = {
  title: string;
  description: string;
  author: string;
  url: string;
  content: string;
};

const samplePost: Post = {
  title: 'Understanding React 19 Metadata',
  description: 'Learn how to manage document metadata with React 19 natively.',
  author: 'Elizabeth Alcalá',
  url: 'https://example.com/react-19-metadata',
  content: 'With React 19, you can now use <title> and <meta> directly in your components...',
};

export default function MetadataExample() {
  const post = samplePost;

  return (
    <article className="p-6 max-w-2xl mx-auto">
      <title>{post.title}</title>
      <meta name="author" content={post.author} />
      <meta name="description" content={post.description} />
      <link rel="canonical" href={post.url} />

      <h2 className="font-bold text-3xl mb-5">{post.title}</h2>
      <p className="text-gray-600 mb-6">By {post.author}</p>
      <p className="text-lg leading-relaxed">{post.content}</p>
    </article>
  );
}