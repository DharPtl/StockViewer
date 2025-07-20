using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class StocksController : ControllerBase
{
    private readonly StockService _stockService;

    public StocksController(StockService stockService)
    {
        _stockService = stockService;
    }

    [HttpGet("{symbol}")]
    public async Task<IActionResult> Get(string symbol)
    {   
        Console.WriteLine(symbol);
        var stock = await _stockService.GetStockAsync(symbol);
        return Ok(stock);
    }
}
