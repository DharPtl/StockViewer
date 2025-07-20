using Newtonsoft.Json.Linq;

public class StockService
{
    private readonly HttpClient _http;
    private readonly string _apiKey = "API_KEY";

    public StockService(HttpClient http)
    {
        _http = http;
    }

    public async Task<StockData> GetStockAsync(string symbol)
    {
        var url = $"https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol={symbol}&apikey={_apiKey}";
        var response = await _http.GetStringAsync(url);
        var json = JObject.Parse(response);
        var quote = json["Global Quote"];

        return new StockData
        {
            Symbol = quote["01. symbol"]?.ToString(),
            Price = decimal.Parse(quote["05. price"]?.ToString() ?? "0"),
            ChangePercent = quote["10. change percent"]?.ToString()
        };
    }
}

public class StockData
{
    public string Symbol { get; set; }
    public decimal Price { get; set; }
    public string ChangePercent { get; set; }
}
