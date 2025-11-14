import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState<any>(null);
  const [selectedAmount, setSelectedAmount] = useState('500');

  const games = [
    { 
      id: 1, 
      name: 'Valorant', 
      currency: 'VP Points', 
      price: 'от 500₽', 
      discount: '-15%',
      icon: '🎯',
      popular: true 
    },
    { 
      id: 2, 
      name: 'CS2', 
      currency: 'CS Скины', 
      price: 'от 300₽', 
      discount: '-20%',
      icon: '🔫',
      popular: true 
    },
    { 
      id: 3, 
      name: 'Dota 2', 
      currency: 'Дота Баксы', 
      price: 'от 400₽', 
      discount: null,
      icon: '⚔️',
      popular: false 
    },
    { 
      id: 4, 
      name: 'Fortnite', 
      currency: 'V-Bucks', 
      price: 'от 600₽', 
      discount: '-10%',
      icon: '🏗️',
      popular: true 
    },
    { 
      id: 5, 
      name: 'League of Legends', 
      currency: 'RP', 
      price: 'от 450₽', 
      discount: null,
      icon: '🏆',
      popular: false 
    },
    { 
      id: 6, 
      name: 'Genshin Impact', 
      currency: 'Генезис', 
      price: 'от 550₽', 
      discount: '-5%',
      icon: '⭐',
      popular: false 
    },
  ];

  const paymentMethods = [
    { name: 'Карта РФ', icon: 'CreditCard', color: 'text-primary' },
    { name: 'СБП', icon: 'Smartphone', color: 'text-secondary' },
    { name: 'ЮMoney', icon: 'Wallet', color: 'text-primary' },
    { name: 'QIWI', icon: 'Banknote', color: 'text-secondary' },
    { name: 'Криптовалюта', icon: 'Bitcoin', color: 'text-primary' },
  ];

  const reviews = [
    {
      id: 1,
      name: 'Александр М.',
      rating: 5,
      text: 'Моментальная доставка! Купил VP для Valorant, пришло за 2 минуты. Рекомендую!',
      game: 'Valorant',
      avatar: 'https://cdn.poehali.dev/projects/06250fd8-6dae-49da-aef8-fe3811268174/files/127f1ca1-b1e0-4809-b27b-43d82988f412.jpg'
    },
    {
      id: 2,
      name: 'Дмитрий К.',
      rating: 5,
      text: 'Лучшие цены на рынке! Беру здесь скины для CS2 уже полгода.',
      game: 'CS2',
      avatar: 'https://cdn.poehali.dev/projects/06250fd8-6dae-49da-aef8-fe3811268174/files/127f1ca1-b1e0-4809-b27b-43d82988f412.jpg'
    },
    {
      id: 3,
      name: 'Михаил П.',
      rating: 5,
      text: 'Отличный сервис, быстро и надежно. Поддержка всегда на связи!',
      game: 'Dota 2',
      avatar: 'https://cdn.poehali.dev/projects/06250fd8-6dae-49da-aef8-fe3811268174/files/127f1ca1-b1e0-4809-b27b-43d82988f412.jpg'
    },
  ];

  const filteredGames = games.filter(game => 
    game.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    game.currency.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleBuyClick = (game: any) => {
    setSelectedGame(game);
    setIsDialogOpen(true);
  };

  const handlePurchase = () => {
    alert(`Покупка ${selectedAmount}₽ валюты для ${selectedGame?.name}! Переход на оплату...`);
    setIsDialogOpen(false);
  };

  const amountOptions = [
    { value: '300', label: '300₽', currency: '1000' },
    { value: '500', label: '500₽', currency: '1700' },
    { value: '1000', label: '1000₽', currency: '3500' },
    { value: '2000', label: '2000₽', currency: '7500' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center animate-pulse-glow">
              <Icon name="Gamepad2" size={24} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              GameVault
            </h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#catalog" className="text-foreground/80 hover:text-primary transition-colors">Каталог</a>
            <a href="#payment" className="text-foreground/80 hover:text-primary transition-colors">Оплата</a>
            <a href="#reviews" className="text-foreground/80 hover:text-primary transition-colors">Отзывы</a>
          </nav>
          <Button variant="default" className="hover-glow">
            <Icon name="ShoppingCart" size={20} className="mr-2" />
            Корзина
          </Button>
        </div>
      </header>

      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
                <Icon name="Zap" size={14} className="mr-1" />
                Моментальная доставка
              </Badge>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Игровая валюта
                <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  по лучшим ценам
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Пополняй баланс в любимых играх быстро и безопасно. Скидки до 20%, круглосуточная поддержка.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="hover-glow text-lg" onClick={() => {
                  const element = document.getElementById('catalog');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  <Icon name="ShoppingBag" size={20} className="mr-2" />
                  Купить валюту
                </Button>
                <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10">
                  <Icon name="PlayCircle" size={20} className="mr-2" />
                  Как это работает
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/06250fd8-6dae-49da-aef8-fe3811268174/files/155fc08b-58c1-4938-84b3-55969270b389.jpg" 
                alt="Gaming" 
                className="rounded-2xl glow-primary w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Каталог игр</h2>
            <p className="text-xl text-muted-foreground mb-8">Выбери свою игру и пополни баланс</p>
            <div className="max-w-md mx-auto relative">
              <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input 
                placeholder="Поиск игры или валюты..." 
                className="pl-10 bg-card border-border"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGames.map((game, index) => (
              <Card 
                key={game.id} 
                className="bg-card border-border hover:border-primary/50 transition-all hover-glow cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="text-5xl">{game.icon}</div>
                    {game.popular && (
                      <Badge className="bg-secondary/20 text-secondary border-secondary/30">
                        <Icon name="TrendingUp" size={12} className="mr-1" />
                        Популярно
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-2xl">{game.name}</CardTitle>
                  <CardDescription className="text-base">{game.currency}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-primary">{game.price}</span>
                    {game.discount && (
                      <Badge variant="destructive" className="text-sm">
                        {game.discount}
                      </Badge>
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full hover-glow" variant="default" onClick={() => handleBuyClick(game)}>
                    <Icon name="ShoppingCart" size={18} className="mr-2" />
                    Купить
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="payment" className="py-16 md:py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Способы оплаты</h2>
            <p className="text-xl text-muted-foreground">Выбирай удобный способ оплаты</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
            {paymentMethods.map((method, index) => (
              <Card 
                key={method.name}
                className="bg-card border-border hover:border-primary/50 transition-all hover-glow cursor-pointer text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6 pb-4">
                  <div className={`mb-3 ${method.color}`}>
                    <Icon name={method.icon as any} size={48} className="mx-auto" />
                  </div>
                  <p className="font-medium text-sm">{method.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 max-w-2xl mx-auto bg-primary/10 border border-primary/30 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="text-primary">
                <Icon name="Shield" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Безопасные платежи</h3>
                <p className="text-muted-foreground">
                  Все платежи защищены SSL-шифрованием. Мы не храним данные ваших карт. Гарантируем возврат средств при технических сбоях.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground">Что говорят наши игроки</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card 
                key={review.id}
                className="bg-card border-border hover:border-primary/50 transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <Avatar>
                      <AvatarImage src={review.avatar} />
                      <AvatarFallback>{review.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <Badge variant="outline" className="text-xs mt-1">
                        {review.game}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10">
              <Icon name="MessageSquare" size={20} className="mr-2" />
              Все отзывы
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-card/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Gamepad2" size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold">GameVault</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Твой надежный магазин игровой валюты с 2020 года.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Все игры</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Популярные</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Новинки</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Гарантии</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Связь</h4>
              <div className="flex gap-3">
                <Button size="icon" variant="outline" className="border-primary/30 hover:bg-primary/10">
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="border-primary/30 hover:bg-primary/10">
                  <Icon name="Mail" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="border-primary/30 hover:bg-primary/10">
                  <Icon name="Phone" size={20} />
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2024 GameVault. Все права защищены.</p>
          </div>
        </div>
      </footer>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-card border-border max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center gap-3">
              <span className="text-4xl">{selectedGame?.icon}</span>
              {selectedGame?.name}
            </DialogTitle>
            <DialogDescription>
              Выбери сумму пополнения {selectedGame?.currency}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6 py-4">
            <RadioGroup value={selectedAmount} onValueChange={setSelectedAmount}>
              {amountOptions.map((option) => (
                <div key={option.value} className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:border-primary/50 transition-all cursor-pointer">
                  <RadioGroupItem value={option.value} id={option.value} />
                  <Label htmlFor={option.value} className="flex-1 cursor-pointer flex justify-between items-center">
                    <span className="text-lg font-semibold">{option.label}</span>
                    <span className="text-muted-foreground">≈ {option.currency} {selectedGame?.currency}</span>
                  </Label>
                </div>
              ))}
            </RadioGroup>

            <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Icon name="Info" size={20} className="text-primary mt-0.5" />
                <div className="text-sm">
                  <p className="font-semibold mb-1">Моментальная доставка</p>
                  <p className="text-muted-foreground">Валюта придёт на аккаунт в течение 2-5 минут после оплаты</p>
                </div>
              </div>
            </div>

            <Button className="w-full hover-glow text-lg" size="lg" onClick={handlePurchase}>
              <Icon name="CreditCard" size={20} className="mr-2" />
              Перейти к оплате {selectedAmount}₽
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;