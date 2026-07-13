import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export default function DashboardPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-zinc-900">Dashboard</h1>
        <Button variant="primary">Yeni Randevu</Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card title="Bugünkü Randevular">
          <p className="text-2xl font-semibold">3</p>
        </Card>
        <Card title="Bu Haftaki Randevular">
          <p className="text-2xl font-semibold">12</p>
        </Card>
        <Card title="Bekleyen Görevler">
          <p className="text-2xl font-semibold">5</p>
        </Card>
        <Card title="İptal Edilenler">
          <div className="flex items-center gap-2">
            <p className="text-2xl font-semibold">2</p>
            <Badge text="Bu hafta" color="red" />
          </div>
        </Card>
      </div>
    </div>
  );
}