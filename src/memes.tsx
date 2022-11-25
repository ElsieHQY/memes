class Memes {
  public static instance: Memes = new Memes();
  public static Data: any;
  public static DataLength: number;

  public async fetchMemes() {
    try {
      const result = await fetch(`https://api.imgflip.com/get_memes`);
      const data = await result.json();
      return (
        (Memes.Data = data.data.memes), (Memes.DataLength = Memes.Data.length)
      );
    } catch (err) {
      console.error(err);
    }
  }

  constructor() {
    this.fetchMemes();
  }
}
export default Memes;
