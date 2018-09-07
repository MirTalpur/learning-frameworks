import scrapy

class TestSpider(scrapy.Spider):
  name = "test"
  start_urls = [
    'http://www.assist.org/web-assist/welcome.html'
  ]

  def parse(self, response):
    #centercontent > form > select
    t = response.selector.xpath('//*[@id="centercontent"]/form/select')
    for test in t:
      yield {
        'tst': test.extract()
      #centercontent > form > select > option:nth-child(1)
      #centercontent > form > select > option:nth-child(2)
    }
    # for tell in t:
    #   yield {
    #     'tst': tell.re_first
    #   }
    # for quote in response.css('div.quote'):
    #   yield {
    #     'text': quote.css('span.text::text').extract_first(),
    #     'author': quote.css('small.author::text').extract_first(),
    #     'tags': quote.css('div.tags a.tag::text').extract(),
    #   }
    # next_page = response.css('li.next a::attr(href)').extract_first()
    # if next_page is not None:
    #   yield response.follow(next_page, callback=self.parse)
