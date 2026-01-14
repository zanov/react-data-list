class ApiService {
  private baseUrl = '/api';

  async getAllData(): Promise<any> {
    const response = await fetch(`${this.baseUrl}/get-data`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add authentication headers if needed, e.g., 'Authorization': `Bearer ${token}`
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    return response.json();
  }

  async getDataItem(id: number): Promise<any> {
    const response = await fetch(`${this.baseUrl}/data-items/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add authentication headers if needed
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch item: ${response.statusText}`);
    }

    return response.json();
  }
}

const apiService = new ApiService();

export default apiService;
