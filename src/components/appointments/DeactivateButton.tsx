"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";
import Button from "@/components/ui/Button";

export default function DeactivateButton({ id }: { id: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleDeactivate() {
    const confirmed = window.confirm(
      "Bu randevuyu pasifleştirmek istediğinize emin misiniz?"
    );
    if (!confirmed) return;

    setLoading(true);

    const { error } = await supabase
      .from("appointments")
      .update({ is_active: false })
      .eq("id", id);

    setLoading(false);

    if (error) {
      alert("Randevu pasifleştirilirken bir hata oluştu.");
      return;
    }

    router.refresh();
  }

  return (
    <Button variant="danger" onClick={handleDeactivate} disabled={loading}>
      {loading ? "..." : "Pasifleştir"}
    </Button>
  );
}