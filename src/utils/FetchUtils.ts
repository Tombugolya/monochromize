export default class FetchUtils {
  private static lambdaUrl =
    'https://y22tcg9j99.execute-api.us-east-1.amazonaws.com/beta';

  static async invokeLambda(data: Object) {
    if (!Object.keys(data).length) return;
    const response = await fetch(this.lambdaUrl, {
      method: 'POST',
      body: JSON.stringify(data),
    });
    return response.json();
  }
}
