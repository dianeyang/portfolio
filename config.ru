# require 'rack/rewrite'

use Rack::Static,
  :urls => ["/images", "/js", "/css", "/fonts", "/partials", "/projects"],
  :root => "public"

# use Rack::Rewrite do
#   rewrite %r{^/work/project5}i, 'public/index.html'  
#   rewrite %r{^/work/(.*)}i, 'public/$1'
# end

run lambda { |env|
  [
    200,
    {
      'Content-Type'  => 'text/html',
      'Cache-Control' => 'public, max-age=86400'
    },
    File.open('public/index.html', File::RDONLY)
  ]
}